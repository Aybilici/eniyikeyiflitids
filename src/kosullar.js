import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./App.css";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <a href="javascript:window.close();">
          <button className="butlar">Kapat</button>
        </a>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application. Lorem Ipsum Nedir? Lorem Ipsum, dizgi ve baskı
          endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı
          bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere
          bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri
          standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca
          varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik
          dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren
          Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus
          PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık
          yazılımları ile popüler olmuştur. Neden Kullanırız? Yinelenen bir
          sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir.
          Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya
          metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı
          sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü yayıncılık
          paketi ve web sayfa düzenleyicisi, varsayılan mıgır metinler olarak
          Lorem Ipsum kullanmaktadır. Ayrıca arama motorlarında 'lorem ipsum'
          anahtar sözcükleri ile arama yapıldığında henüz tasarım aşamasında
          olan çok sayıda site listelenir. Yıllar içinde, bazen kazara, bazen
          bilinçli olarak (örneğin mizah katılarak), çeşitli sürümleri
          geliştirilmiştir. Nereden Gelir? Yaygın inancın tersine, Lorem Ipsum
          rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana
          klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.
          Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard
          McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç
          sözcüklerden biri olan 'consectetur' sözcüğünün klasik edebiyattaki
          örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum,
          Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum
          et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33
          sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir
          tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum
          pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı
          bölümdeki bir satırdan gelmektedir. 1500'lerden beri kullanılmakta
          olan standard Lorem Ipsum metinleri ilgilenenler için yeniden
          üretilmiştir. Çiçero tarafından yazılan 1.10.32 ve 1.10.33 bölümleri
          de 1914 H. Rackham çevirisinden alınan İngilizce sürümleri eşliğinde
          özgün biçiminden yeniden üretilmiştir. Nereden Bulabilirim? Lorem
          Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir
          çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek
          değiştirilmişlerdir. Eğer bir Lorem Ipsum pasajı kullanacaksanız,
          metin aralarına utandırıcı sözcükler gizlenmediğinden emin olmanız
          gerekir. İnternet'teki tüm Lorem Ipsum üreteçleri önceden belirlenmiş
          metin bloklarını yineler. Bu da, bu üreteci İnternet üzerindeki gerçek
          Lorem Ipsum üreteci yapar. Bu üreteç, 200'den fazla Latince sözcük ve
          onlara ait cümle yapılarını içeren bir sözlük kullanır. Bu nedenle,
          üretilen Lorem Ipsum metinleri yinelemelerden, mizahtan ve
          karakteristik olmayan sözcüklerden uzaktır.
        </Typography>
      </Paper>
    </div>
  );
}
