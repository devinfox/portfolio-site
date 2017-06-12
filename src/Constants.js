/*
 * Personal Website
 * Copyright © 2016-2017 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT 
 * (https://github.com/mateiradu/personal-webiste/blob/master/LICENSE)
 */

// Personal information.
export const name = "Matei";
export const fullName = "Matei Bogdan Radu";
export const fullNameShort = "Matei Radu";
export const email = "hello@mateiradu.me";
const birthday = new Date(1992,3,24);
export const age = calculateAge(birthday);
export const profession = "Software developer";

// Contact links.
export const emailLink = "mailto:"+email;
export const githubLink = "https://github.com/mateiradu";
export const twitterLink = "https://twitter.com/matei_dev";
export const linkedinLink = "https://www.linkedin.com/in/mateibogdanradu/";
export const facebookLink = "https://www.facebook.com/mateiradu92";

// Site information.
export const repoLink = githubLink + "/personal-website";
export const licenseLink = repoLink + "/blob/master/LICENSE";
export const licenseType = "MIT";

/**
 * Calculates the age by providing the birthday.
 * 
 * @param {Date} birthday 
 * @returns {Number} Resulting age.
 */
function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}