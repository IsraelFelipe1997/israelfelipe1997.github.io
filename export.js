function exportToCSV() {
    // Verifica se há dados para exportar
    if (dataframe.length === 0) {
        alert('Não há dados para exportar.');
        return;
    }

    // Cria o conteúdo CSV
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Data,Tabuada,Pergunta,Resposta,Status\n";
    dataframe.forEach(entry => {
        csvContent += `${entry.data},${entry.tabuada},${entry.pergunta},${entry.resposta},${entry.status}\n`;
    });

    // Cria um elemento de link para download e simula um clique nele
    const encodedURI = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedURI);
    link.setAttribute("download", "resultados.csv");
    document.body.appendChild(link); // Necessário para o Firefox
    link.click();
}
