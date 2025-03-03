function createButton(text, className, onClick) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.style.marginRight = "10px"; // 添加一些间距
  btn.className = className;

  btn.onclick = onClick;
  return btn;
}

function createTableRow(tbody, args) {
  const row = tbody.insertRow();

  for (let index = 0; index < args.length; index++) {
    const arg = args[index];
    if (typeof arg === "string") {
      row.insertCell().textContent = arg;
    } else {
      row.insertCell().appendChild(arg);
    }
  }
}

function downloadAudioFile(url, filename) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
