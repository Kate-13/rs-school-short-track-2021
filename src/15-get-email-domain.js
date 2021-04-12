/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const domain = email.match(/@[a-z0-9-]+[.]{1}[a-z]{2,}/g);
  const result = domain.toString().substring(1);
  return result;
}

module.exports = getEmailDomain;
