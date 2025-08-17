/**
 * DOM Serializer - Preserves whitespace and attributes when serializing HTML
 */

class DOMSerializer {
    constructor() {
        this.preserveWhitespace = true;
        this.preserveAttributes = true;
    }

    /**
     * Serialize an element to HTML while preserving formatting
     */
    serializeElement(element) {
        if (element.nodeType === Node.TEXT_NODE) {
            return this.serializeTextNode(element);
        }
        
        if (element.nodeType === Node.ELEMENT_NODE) {
            return this.serializeElementNode(element);
        }
        
        return '';
    }

    /**
     * Serialize a text node, preserving whitespace
     */
    serializeTextNode(textNode) {
        let text = textNode.textContent;
        
        if (this.preserveWhitespace) {
            // Preserve leading/trailing whitespace
            text = text.replace(/^\s+/, ' ').replace(/\s+$/, ' ');
        }
        
        return this.escapeHtml(text);
    }

    /**
     * Serialize an element node with attributes
     */
    serializeElementNode(element) {
        const tagName = element.tagName.toLowerCase();
        let html = `<${tagName}`;
        
        // Serialize attributes
        if (this.preserveAttributes) {
            for (const attr of element.attributes) {
                const value = attr.value;
                if (value === '' || value === attr.name) {
                    html += ` ${attr.name}`;
                } else {
                    html += ` ${attr.name}="${this.escapeAttribute(value)}"`;
                }
            }
        }
        
        // Handle self-closing tags
        const selfClosingTags = ['img', 'br', 'hr', 'input', 'meta', 'link'];
        if (selfClosingTags.includes(tagName)) {
            html += ' />';
            return html;
        }
        
        html += '>';
        
        // Serialize children
        for (const child of element.childNodes) {
            html += this.serializeElement(child);
        }
        
        html += `</${tagName}>`;
        return html;
    }

    /**
     * Serialize a document fragment or element
     */
    serialize(container) {
        if (container.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            let html = '';
            for (const child of container.childNodes) {
                html += this.serializeElement(child);
            }
            return html;
        }
        
        return this.serializeElement(container);
    }

    /**
     * Extract content from a container, preserving structure
     */
    extractContent(container, selector = null) {
        if (selector) {
            const elements = container.querySelectorAll(selector);
            const fragment = document.createDocumentFragment();
            elements.forEach(el => fragment.appendChild(el.cloneNode(true)));
            return this.serialize(fragment);
        }
        
        return this.serialize(container);
    }

    /**
     * Parse HTML and return a document fragment
     */
    parse(html) {
        const template = document.createElement('template');
        template.innerHTML = html.trim();
        return template.content;
    }

    /**
     * Escape HTML special characters
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Escape attribute values
     */
    escapeAttribute(value) {
        return value
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    /**
     * Sanitize HTML content (basic XSS prevention)
     */
    sanitize(html) {
        // Remove script tags and event handlers
        const div = document.createElement('div');
        div.innerHTML = html;
        
        // Remove script tags
        const scripts = div.querySelectorAll('script');
        scripts.forEach(script => script.remove());
        
        // Remove event handlers from all elements
        const allElements = div.querySelectorAll('*');
        allElements.forEach(el => {
            const attrs = el.attributes;
            for (let i = attrs.length - 1; i >= 0; i--) {
                const attr = attrs[i];
                if (attr.name.startsWith('on')) {
                    el.removeAttribute(attr.name);
                }
            }
        });
        
        return div.innerHTML;
    }

    /**
     * Merge HTML content into existing structure
     */
    mergeContent(existingHtml, newContent, selector) {
        const existingDoc = this.parse(existingHtml);
        const newDoc = this.parse(newContent);
        
        const targetElement = existingDoc.querySelector(selector);
        if (targetElement) {
            targetElement.innerHTML = newDoc.body.innerHTML;
        }
        
        return this.serialize(existingDoc);
    }
}

// Export for use in the editor
window.DOMSerializer = DOMSerializer;
