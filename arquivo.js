// Função para alternar entre as abas
function openTab(evt, tabName) {
    // Esconde todos os conteúdos das abas
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove a classe "active" de todos os botões de abas
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Mostra o conteúdo da aba selecionada
    document.getElementById(tabName).style.display = "block";
  
    // Adiciona a classe "active" ao botão da aba selecionada
    evt.currentTarget.className += " active";
  }
  
  // Define a aba "Página Inicial" como ativa por padrão
  document.getElementById("defaultOpen").click("imagemportifólio");
  

 
  