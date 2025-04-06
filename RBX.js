<script>
  const params = new URLSearchParams(window.location.search);
  if (params.get("nombre")) {
    document.getElementById("nombre").value = decodeURIComponent(params.get("nombre"));
  }
  if (params.get("pedido")) {
    document.getElementById("pedido").value = decodeURIComponent(params.get("pedido"));
  }
  if (params.get("direccion")) {
    document.getElementById("direccion").value = decodeURIComponent(params.get("direccion"));
  }
</script>
