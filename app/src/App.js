import Items from './Items'
import './App.css'
const data = [
  {
    id: 1,
    img:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreeburgpianos.com%2Fwp-content%2Fuploads%2F2018%2F08%2FKawai-GL-10-PE-2.jpg&f=1&nofb=1',
    title: 'Nord Stage 3 88 Keys',
    desc: 'EMLA Musics',
    price: '$5738.00',
  },
  {
    id: 2,
    img:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.goodfreephotos.com%2Falbums%2Fother-photos%2Fa-guitar.jpg&f=1&nofb=1',
    title: 'Line 6 Helix Rack Guitar',
    desc: 'Pro Music Tools',
    price: '$1831.57',
  },
  {
    id: 3,
    img:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.amazona.de%2Fwp-content%2Fuploads%2F2020%2F02%2Fnord-lead-a1-synthesizer-aufmacher.jpg&f=1&nofb=1',
    title: 'Nord Lead A1',
    desc: 'Gear Garage',
    price: '$1700.00',
  },
  {
    id: 4,
    img:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.rekkerd.org%2Fwp-content%2Fuploads%2F2017%2F08%2FMoog-Subsequent37-angle.jpg&f=1&nofb=1',
    title: 'Moog Subsequent 37',
    decs: 'TunrLab',
    price: '$1700',
  },
  {
    id: 5,
    img:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.reverb.com%2Fimage%2Fupload%2Fs--9iDZtxjd--%2Ff_auto%2Ct_supersize%2Fv1582117386%2Fb42340d6rmvohratncqk.jpg&f=1&nofb=1',
    title: 'Moog Minitaur 2010s Black',
    decs: 'Andrews Gear Outlet',
    price: '$682.80',
  },
]

function App() {
  return (
    <div className="App">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <Items
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          </div>
        )
      })}
    </div>
  )
}

export default App
