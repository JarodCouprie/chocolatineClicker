/**
 * 
 * @param {string} id 
 * @returns {DocumentFragment}
 */

export function cloneTemplate(id){
    return document.querySelector("#"+id).content.cloneNode(true);
}