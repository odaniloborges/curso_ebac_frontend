(function() {

    // Configurações.
    var settings = {
        images: [
            { url: 'assets/images/bg01.jpg', alignment: 'center' },
            { url: 'assets/images/bg02.jpg', alignment: 'center' },
            { url: 'assets/images/bg03.jpg', alignment: 'center' }
        ],
        delay: 6000
    };

    // Variáveis.
    var pos = 0, lastPos = 0;
    var $wrapper = document.createElement('div');
    $wrapper.id = 'bg';
    document.body.appendChild($wrapper);

    var $bgs = [];

    // Criar elementos de fundo.
    settings.images.forEach(function(image) {
        var $bg = document.createElement('div');
        $bg.style.backgroundImage = 'url("' + image.url + '")';
        $bg.style.backgroundPosition = image.alignment;
        $wrapper.appendChild($bg);
        $bgs.push($bg);
    });

    // Iniciar o slideshow.
    $bgs[pos].classList.add('visible');
    $bgs[pos].classList.add('top');

    // Verificar se há mais de uma imagem e se o navegador suporta transições.
    if ($bgs.length > 1 && canUse('transition')) {
        window.setInterval(function() {
            lastPos = pos;
            pos++;

            // Voltar ao início se necessário.
            if (pos >= $bgs.length) {
                pos = 0;
            }

            // Trocar as imagens no topo.
            $bgs[lastPos].classList.remove('top');
            $bgs[pos].classList.add('visible');
            $bgs[pos].classList.add('top');

            // Esconder a última imagem após um pequeno intervalo.
            window.setTimeout(function() {
                $bgs[lastPos].classList.remove('visible');
            }, settings.delay / 2);

        }, settings.delay);
    }

    // Função para verificar suporte a transições.
    function canUse(feature) {
        var style = document.documentElement.style;
        return feature in style;
    }

})();