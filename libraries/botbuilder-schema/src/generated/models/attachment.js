/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * An attachment within an activity
 *
 */
class Attachment {
  /**
   * Create a Attachment.
   * @member {string} [contentType] mimetype/Contenttype for the file
   * @member {string} [contentUrl] Content Url
   * @member {object} [content] Embedded content
   * @member {string} [name] (OPTIONAL) The name of the attachment
   * @member {string} [thumbnailUrl] (OPTIONAL) Thumbnail associated with
   * attachment
   */
  constructor() {
  }

  /**
   * Defines the metadata of Attachment
   *
   * @returns {object} metadata of Attachment
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Attachment',
      type: {
        name: 'Composite',
        className: 'Attachment',
        modelProperties: {
          contentType: {
            required: false,
            serializedName: 'contentType',
            type: {
              name: 'String'
            }
          },
          contentUrl: {
            required: false,
            serializedName: 'contentUrl',
            type: {
              name: 'String'
            }
          },
          content: {
            required: false,
            serializedName: 'content',
            type: {
              name: 'Object'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          thumbnailUrl: {
            required: false,
            serializedName: 'thumbnailUrl',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Attachment;