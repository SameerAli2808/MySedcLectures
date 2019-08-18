document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("execute").addEventListener("click", executeStringification);
});


const executeStringification = async () => {
    const string = document.getElementById("string").value;

    const url = `/api/Strings/${string}`;

    const response = await fetch(url);
    const data = await response.json();

    // todo - fetch and process data
    document.getElementById("UpperCase").textContent = `Upper Case: ${data.upperCase}`;
    document.getElementById("LowerCase").textContent = `Lower Case: ${data.lowerCase}`;
    document.getElementById("TitleCase").textContent = `Title Case: ${data.titleCase}`;
    document.getElementById("SentenceCase").textContent = `Sentence Case: ${data.sentenceCase}`;
    document.getElementById("CamelCase").textContent = `Camel Case: ${data.camelCase}`;
    document.getElementById("PascalCase").textContent = `Pascal Case: ${data.pascalCase}`;
    document.getElementById("KebabCase").textContent = `Kebab Case: ${data.kebabCase}`;
    document.getElementById("UnderscoreCase").textContent = `Underscore Case: ${data.underscoreCase}`;

};