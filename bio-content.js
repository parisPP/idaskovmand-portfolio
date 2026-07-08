// 1. The main biography panel content
const sharedBiographyHTML = `
<h1 class="site-heading-overlay custom-bio-header">BIO</h1>
  <div class="shelf">
    <div class="bio-vertical-layout">
     <div class="bio-portrait-wrap"> <img src="img/tokyoto.png" alt="Ida Skovmand portrait" class="bio-stacked-img"></div>
      <div class="about-text">
        <p>Hello, I'm Ida Skovmand. I write and take photos, mostly.</p>
        <p>My <a href="#writing">writing</a> about art and culture has appeared in publications such as <i>Sydsvenskan, Lindsay Magazine, Tablet Magazine, The Skirt Chronicles, DANS, BON, SVD</i> and <i>I Love You Magazine</i>. I also take photos and make zines. A few years back I shot the pictures for a <a href="https://www.gallimard.fr/catalogue/la-cuisine-des-gens-qui-sement/9782072864698" target="_blank">French cookbook</a>.</p>
        <p><a href="#dama" class="cafe-trigger">Dama</a> is a café and bakery that I co-founded in 2022 and was the creative director of. Now, as <a href="http://instagram.com/debillie.feed" target="_blank">debillie</a>, my partner Aviv and I do big and small mixed media projects around food: events, zines, f&b concepts and art direction. One day when the stars align, we'll do another café.</p>
        <p>I was born on the coast in the south of Sweden, to Danish and Norwegian parents. I spent eight formative years freelancing as a writer in Paris. Other places that I have called home at one point or another are Malmö, Jaffa, Copenhagen and London. I'm currently based in Vienna.</p>
        <p class="contact-line"><span class="secure-email">moc.liamg@dnamvoksadi</span></p>
        <p class="text-bottom-about">
          <img src="img/stone.png" alt="a small pebble" class="stone">
        </p>
      </div>
    </div>
  </div>
`;

// 2. The Dama café panel content
const sharedDamaHTML = `
  <div class="cafe-archive-content">
    <img src="portfolio/dama.png" alt="Dama bakery item" class="cafe-archive-img">
  </div>
`;

// 3. The Selected Writing panel content
const sharedWritingHTML = `
  <div class="shelf-writing">
    <div class="text-big">Selected articles</div>
    <div class="subtitle">texts in Swedish marked with *</div>
    <p class="intro">For more than a decade, I've covered subjects in art and culture (books, music, fashion, Jewish culture, dance, being a person on the internet, film...) for Swedish news press and anglophone magazines. Here are some of the pieces:</p>
    <div class="textlist">
      <p><a href="https://lindsayeditions.com/moyra-davey/" target="_blank">TIME AND SPACE DISPLACED</a>, an interview with Moyra Davey about her book <a href="https://www.ndbooks.com/book/index-cards/" target="_blank" class="publication-link">Index Cards</a>.</p>        
      <p><a href="https://www.svd.se/randerna-gar-aldrig-ur-jean-paul-gaultier" target="_blank">An interview with Jean Paul Gaultier</a>.<em>*</em></p>
      <p>For <a href="https://www.theskirtchronicles.com/shop/the-skirt-chronicles-volume-v" target="_blank" class="publication-link">the pants issue of The Skirt Chronicles</a>, a piece on the iconic, pantaloon-wearing dancer Valeska Gert: <a href="valeska.html">MAKING FACES</a>.</p>
      <p><a href="https://www.tabletmag.com/sections/arts-letters/articles/unorthodox-netflix" target="_blank">An interview with Shira Haas and Deborah Feldman</a> on the launch of Netflix series <a href="https://en.wikipedia.org/wiki/Unorthodox_(miniseries)" target="_blank" class="publication-link">Unorthodox</a>.</p>
      I once ghostwrote <a href="https://sv-wikipedia-org.translate.goog/wiki/Black_Ascot?_x_tr_sl=sv&_x_tr_tl=en&_x_tr_hl=en-US&_x_tr_pto=wapp" target="_blank">a fictional blog</a> for an opera. *</p>
      <p><a href="https://www.sydsvenskan.se/kultur/anrikt-handarbete-annu-viktigt-i-modevarlden/" target="_blank">A visit to Chanel&rsquo;s haute couture ateliers</a>.<em>*</em></p>
      <p><a href="https://www.sydsvenskan.se/kultur/grata-pa-natet-inte-bara-for-exhibitionister/" target="_blank">How to be sad on the internet</a> *</p>
      <p>Between 2014 and 2024, I wrote a regular <a href="https://www.sydsvenskan.se/skribent/575254de-3a15-48f2-a973-fda27e5e035b" target="_blank">music column</a> for the Swedish newspaper <a href="" class="publication-link">Sydsvenskan</a> about hiphop and R&B. *</p>
      <p>For <a href="https://readymag.website/u62703423/708677/" target="_blank" class="publication-link">Stufft Magazine</a> I did a piece about The Sopranos, a particular garlic soup and, most of all, about cooking for someone sick: <a href="https://readymag.com/u62703423/708677/20/" target="_blank">THE LAST GARLIC BREATH</a>.</p>
      <p><a href="https://www.sydsvenskan.se/2015-07-05/provning-provrum" target="_blank">A panic room-inspired piece</a> on trying on swimwear.<em>*</em></p>
      <p><a href="https://www.sydsvenskan.se/kultur/modet-moter-antligen-framtiden/" target="_blank">Predicting the future: interviews with pro prophets.</a> *</p>
      <p><a href="https://www.sydsvenskan.se/2014-10-04/jag-doftar-alltsa-ar-jag" target="_blank">I SMELL THEREFORE I AM</a>, in which I tried tricking perfume department staff into curing my identity crisis.<em>*</em></p>
      <p><a href="https://www.sydsvenskan.se/kultur/modekejsaren-karl-lagerfeld-har-gatt-sitt-sista-varv-pa-catwalken/" target="_blank">Karl Lagerfeld’s persona(s)</a>.<em>*</em></p>
      <p><a href="https://www.sydsvenskan.se/2015-10-18/slanga-ar-det-nya-svarta">CLEANING OUT THE CLOSET</a>.&nbsp;<em>*</em></p>
      <p>For the&nbsp;Princess Issue&nbsp;of&nbsp;<a href="https://www.instagram.com/iloveyoumagazine/" target="_blank">I Love You Magazine</a>, I explored the colour pink by dressing exclusively in it for a week.</p>
      <p>I joined the senior knitting group &ldquo;Kaffeslabberas&rdquo;, who regularly collaborates with Danish artists and designers. We talked about aging, knitting the ideas of contemporary graffiti artists and fashion designers, but more than anything else it was&nbsp;<a href="https://www.sydsvenskan.se/kultur-and-nojen/avmaskat-pa-catwalken/" target="_blank">a conversation about death</a>.&nbsp;<em>*</em></p>
      <p>My very first Paris commission was covering football player&nbsp;<a href="https://www.sydsvenskan.se/2012-07-19/zlatanfeber-i-paris" target="_blank">Zlatan Ibrahimovic joining Paris Saint Germain</a>.&nbsp;<em>*</em></p>
    </div>
  </div>
`;