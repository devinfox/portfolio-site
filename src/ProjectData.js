/**
 * Defines the characterstics of a Project.
 * 
 * Objects of this class will be used to populate the
 * Portfolio section.
 * 
 * @author Matei Bogdan Radu
 */
class ProjectData {

    constructor(img, title, descr, link) {
        this.img = img;     // Card header image, 600x320
        this.title = title; 
        this.descr = descr;
        this.link = link;   // Link to the project (store, web, etc)

        // TODOs
        // img caption
        // btn label
    }
}

export default ProjectData;