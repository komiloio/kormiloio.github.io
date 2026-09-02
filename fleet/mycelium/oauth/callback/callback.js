(() => {
  const query = new URLSearchParams(window.location.search);
  const forwarded = new URLSearchParams();

  for (const name of ["code", "state", "error", "error_description"]) {
    const value = query.get(name);
    if (value !== null) forwarded.set(name, value);
  }

  window.history.replaceState({}, document.title, window.location.pathname);

  const hasResult = forwarded.has("code") || forwarded.has("error");
  const hasState = forwarded.has("state");
  const title = document.getElementById("title");
  const message = document.getElementById("message");
  const link = document.getElementById("open-obsidian");

  if (!hasResult || !hasState) {
    title.textContent = "This callback is incomplete";
    message.textContent = "Return to Mycelium in Obsidian and start the connection again.";
    return;
  }

  const deepLink = `obsidian://mycelium-oauth?${forwarded.toString()}`;
  link.href = deepLink;
  link.hidden = false;
  window.location.replace(deepLink);
})();
