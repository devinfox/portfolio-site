/*
 * Personal Website
 * Copyright © 2016-2017 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT 
 * (https://github.com/mateiradu/personal-webiste/blob/master/LICENSE)
 */

// Personal information.
export const name = "Devin";
export const fullName = "Devin Patrick Fox";
export const fullNameShort = "Devin Fox";
export const email = "devinfoxbusiness@gmail.com";
const birthday = new Date(1997,9,12);
export const age = calculateAge(birthday);
export const profession = "Full-Stack Web Developer";

// Contact links.
export const emailLink = "devin:"+email;
export const githubLink = "https://github.com/devinfox";
export const twitterLink = "https://twitter.com/matei_dev";
export const linkedinLink = "www.linkedin.com/in/devinfox912";
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