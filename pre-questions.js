//! 1. Please list and explain in 1-2 sentences of the top 10 OWASP risks.

//? Broken Access Control

// When access control is broken, sometimes users can access certain controllers they shouldn't have access in the first place. This can lead to informations beaing leaked and some users that can modify data which in the first place they shouldn't have access with.

//? Cryptographic Failures

//Some information that are needed from the users are needed to be concealed, that is why it is needed that some information that are inputted are needed to be in cryptographic algorithms so that they can be protected in case there would be any attacks

//? Injections

// An attacker inserts, or from the word itself, injects their own code into a not so secured code. One example of injections is NoSQL injections, where an attacker will inject a query into the code and access the database of the system.

//? Insecure Design

// Developers need to design an application wherein there should be a secure design pattern and a threat modeling, making sure that the code being built is designed robustly so that it can mitigate attacks

//? Security Misconfigurations

// There could be a security misconfiguration especially since projects could be continually changing, regularly checking update change and patches from security settings will avoid misconfigurations from your code.

//? Vulnerable and Outdated Components

// When your components/dependencies are out of date, it can compromise the security of your application.

//? Identification and Authentication Flaws

// It is when user information and its authentications are weak, like passwords wherein you would allow user to have passwords that are not that strong to be saved in the database. One problem also is that sessions and tokens are not properly regulated and invalidated.

//? Software and Data Integrity Failures

// When building codes now, it requires some updates every now and then. Sometimes developers rely on public repositories and sometimes untrusted sources without verifying their integrity.

//? Security Logging and Monitoring Flaws

// This involves the need to have a good logging for your errors. It enables you to log and track every errors that come in building your application and also enables you to see errors when the user experiences it.

//? Server-side Request Forgery

// SSRF happens when an attacker has partial to full control of the request sent by the web application. This happens when fetching a remote resource without validating the URL in which that user supplied. 


//! 2. In 2-3 sentences, please explain what NoSQL Injection is and a solution.

//NoSQL injection is one of the injection attacks that targets databases that do not use SQL. These attacks are often injected in the user input of the code. One way to prevent this is to have input sanitization by using the package express mongo sanitize

//! 3. In 2-3 sentences, please explain what cross site scripting is and a solution.

// This attack happens as an attacker takes advantage of a vulnerable and insecure application and the user. The attacker could send an unsuspiciously looking mail with a link but with a bad script in it, disguising itself in the background while the user inputs information that now will be sent to the attacker. The solution for this is to use xss-clean package that cleans script.

//! 4. In 2-3 sentences, please explain what rate limiting is and a solution.

//Rate Limiter is there to limit queries so that it can minimize network traffic and they can also avoid bot attacks. This can help when there will come a time that your user data is compromise, and a user have a list of username and password ready to try and log it in the system. One solution is using the module express rate limit

//! 5. In 2-3 sentences, please explain what CORS is and a solution.

// CORS is a mechanism wherein it will allow access to resources to be shared to other domains other than their own. One thing I had in mind, is embedding. When certain apps/websites have embeddings then their 'access-control-allow-origin' is in wildcard when using the package 'CORS', if not then there 'access-control-allow-origin' is customized.