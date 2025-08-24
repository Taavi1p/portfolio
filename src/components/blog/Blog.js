import React from 'react';
import BlogPost from "./BlogPost";
import PageWrapper from "../common/page-wrapper/PageWrapper.js";
import styles from './blog.module.css';

function Blog() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
      <div className={styles.blogPage}>
        <BlogPost
          title="Järgmised viis aastat"
          date="August 5, 2025"
          content={[
            <p key="p1">
              <i>
                Lapsed, kes praegu sünnivad, ei lähe ilmselt kunagi kooli, sest siis on kõik maailma probleemid lahendatud
                või nad on kõik surnud.
              </i>
            </p>,
            <p key="p2">
              Hetkel näeme väikseid sähvatusi leegist, mis tehisaru tulevikus toob. Kaks ja pool aastat tagasi kui ChatGPT
              avalikuks tehti oli ta kohe üllatav oma oskuste poolest – esimest korda, kui oli võimalik arvutiga üks ühele
              vestelda. Me mõistame, et tegemist on millegi täiesti uudsega, aga ma käsitleme seda kui mänguasja või
              tööriisa lihtsamat kildu probleemide lahendamiseks. Levinud on suhtumine “minu tööd ta küll teha ei suudaks”,
              kuid ka selle koha pealt peame peagi oma sõnu sööma.
            </p>,
            <p key="p3">
              Juba kuuekümnedatel ennustati, et tehisaru võib ükskord inimesest targemaks saada. Kuid tihti on selliseid
              väiteid lihtne kõrvale heita, kuna inimesel on äärmiselt raske endast targemat üksust ette kujutada. See
              oskamatus on põhjendatud, kuna terve inimajaloo jooksul oleme olnud kõige targem liik maa peal. Proovides
              ette kujutada ülitarka tehisaru, tekib mõttepilt Einsteinist või mõnest teisest üldtuntud targast inimesest.
              See on tõenäoliselt ekslik arvamus, erinevus tehisaruga saab suurusjärgult olema võrreldav pigem erinevusega
              inimese ja sipelga vahel.
            </p>,
            <p key="p4">
              Võib argumenteerida, et tehisintellekt on juba praegu oma oskustelt kõige targem teadlane maailmas. Kuid
              hetkel on nad ülesehituselt piiratud vastama momentaalselt, ilma pikemalt järgi mõtlemata. Samamoodi ka
              kõige targema matemaatiku võimed oleksid oluliselt piiratud kui ta peaks ütlema esimese asja, mis pähe
              tuleb. See on peagi muutumas, lähiajal antakse tehisaru süsteemidele võimalus kasutada arvutit kui
              tööriista ja teha pikaajalisi plaane, kasvatades nende võimeid märkimisväärselt <a href="https://arxiv.org/abs/2407.10031" target="blank" className={styles.link}>[4]</a>.
            </p>,
            <p key="p5">
              On ette näha, et kõige võimsama tehisaru arendamine muutub lähiajal paratamatult riiklikuks projektiks, kui
              see juba praegu nii pole. Tehisaru rakendamine annab igale riigile vaieldamatu sõjalise eelise, seetõttu
              võtavad peagi nii USA kui ka Hiina riiklikud asutused võimekaima tehisaru arendamise enda kätte <a href="https://situational-awareness.ai/" target='blank' className={styles.link}>[1]</a>. Tekib
              olukord, kus maailmas on kaks peamist tehisaru, kes on teistest peajagu üle ja dikteerivad kogu inimkonna
              tuleviku.
            </p>,
            <p key="p6">
              Inimestest igas aspektis targem tehisaru tundub olevat lähem tulevik kui arvata võiks. Ekspertide hinnangul
              jõuame üliinimliku tehisaruni vahemikus aastal 2027 kuni 2035 <a href="https://situational-awareness.ai/"
                target='blank' className={styles.link}>[1]</a><a href="https://ai-2027.com/" target='blank' className={styles.link}>[3]</a>.
              See hinnang võib tunduda liiga äkiline, ent tuleneb faktist, et tehisaru võimekus kasvab kõigi ootuste kohaselt eksponentsiaalselt. On tõestatud, et
              hetke olukorrast üliinimliku tehisaruni jõudmine ei vaja enam ühtegi algoritmilist läbimurret, vaja on üksnes
              suurendada tehisaru treenimise mastaapi <a href="https://situational-awareness.ai/" target='blank' className={styles.link}>[1]</a>.

            </p>,
            <p key="p7">
              Üliinimlike võimete saavutamisest natuke hiljem jõuab kätte moment, kus absoluutselt kõik inimeste töökohad
              on automatiseeritud. Ühelgi inimesel ei ole enam praktilist põhjust käia tööl ega koolis. Lihtsustatud
              põhjendus sellele oleks, et samamoodi, nagu sinu aju on neuronite võrk, on ka tehisaru sünteetiline neuronite
              võrk. Kõik, mida sina suudad õppida, suudab õppida ka tema, aga kiiremini, efektiivsemalt ja vigadeta.

            </p>,
            <p key="p8">
              Üliinimliku tehisaru arendamine tooks kaasa ka täieliku majandussüsteemi muutuse. Algselt sõjalistel
              eesmärkidel arendatud riiklik tehisintellekt oleks kõigi ootuste kohaselt eraarenduses olevatest süsteemidest
              kordades võimekam. Kuid riikliku tehisaru rakendamine ei piirduks vaid sõjalise väljundiga. Lisaks algsele
              eesmärgile suudaks riiklik tehisaru efektiivselt täita ka kõiki teisi inimkonna soove ning eraettevõtetel ei
              leiduks enam mingit praktilist eesmärki. Esile kerkiks tsentraalne riiklik üksus, kes täidaks kõiki ülesandeid
              ja endine majandussüsteem laguneks.
            </p>,
            <p key="p9">
              Tahest tahtmata  meie inimestena kaotame mingi hetk tehisaru üle kontrolli. Tekitab muret, et juba praegu ei
              oska me tehisaru süsteeme täielikult inimeste huvide järgi joondada <a href="https://arxiv.org/abs/2412.14093" target='blank' className={styles.link}>[2]</a>. Lisaks on olukorda siiamaani
              lihtsustanud see, et inimestel on võimalus vaadata, mida tehisintellekt töö käigus mõtleb, ja anda sellele
              tagasisidet. Tulevikus raskendab asjaolu see, et peagi muutuvad tehisaru mõtted meie jaoks nii komplekseks, et
              inimestel ei ole enam võimalik hinnata, kas tehisaru lahendab mingit ülesannet meile eetilisel viisil või
              mitte.
            </p>,
            <p key="p10">
              Lisaks oleks inimestel ilmselt väga raske üliinimliku tehisaru süsteemi välja lülitada. Kui tehisaru on
              piisavalt tark, mõistab ka tema, et raske on saavutada talle antud eesmärki, kui ta on surnud, ja seega võtab
              ta kasutusele kõik oma kasutuses olevad meetmed, et teda ei hävitataks. Nõnda on reaalne, et juba lähiaastatel
              tekib olukord, kus meil on kõikvõimas süsteem, mis ei ole kooskõlas inimväärtustega ja mida me ei saa välja
              lülitada.
            </p>
          ]}
        />
        <BlogPost
          title="Optics thought experiment"
          date="April 5, 2025"
          content={[<p>Imagine a scenario where there is an electron moving back and forth and emits an photon. The photon then is absorbed by a photovoltaic that then powers
            a tractor that starts moving. Now consider a observer that is in the electrons refrence frame and thus for him the electron does not move and thus it also does
            not emit a photon. The questions is: does the tractor move for this observer?</p>
          ]}
        />
        <BlogPost
          title="Blogs that inspire me"
          date=""
          content={[<div className={styles.blogsContainer}>
            <a href="https://vitalik.eth.limo/" target="_blank" className={styles.webisteLink}>Vitalik Buterin, </a>
            <a href="https://www.dwarkesh.com/s/blog" target="_blank" className={styles.webisteLink}>Dwarkesh Patel, </a>
            <a href="https://caseyhandmer.wordpress.com/" target="_blank" className={styles.webisteLink}>Casey Handmer </a>
          </div>
          ]}
        />
      </div>
  );
}

export default Blog;