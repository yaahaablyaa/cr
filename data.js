const data = [
    {
        title: 'MacBook Air',
        img: 'macbookair.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                chip_ing: 'm1.png',
                description: ''
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency',
                memory_img: 'memory.png'
            },
            memory: {
                size: 2,
                type: 'TB'
            },
            battery: 18,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 2.8,
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13”',
        img: 'macbook13.png',
        price: 1299,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                chip_ing: 'm1.png',
                description: 'Also available with Intel Core i5 or i7 processor'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency',
                memory_img: 'memory.png'
            },
            memory: {
                size: 2,
                type: 'TB'
            },
            battery: 20,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 3.0,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Air',
        img: 'macbookpro.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 16
            },
            chip: {
                title: 'Up to Intel Core i9 processor',
                chip_ing: 'intel.png',
                description: ''
            },
            ram: {
                title: 'Up to 64GB memory',
                description: '',
                memory_img: 'memory2.png'
            },
            memory: {
                size: 8,
                type: 'TB', 
            },
            battery: 11,
            camera: {
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]

let con = document.querySelector('.con')

for (let i of data) {
    //createElement
    let item = document.createElement('div')
    let title = document.createElement('div')
    let div_buy = document.createElement('div')
    let display = document.createElement('div')
    let proc = document.createElement('div')
    let ram = document.createElement('div')
    let memory = document.createElement('div')
    let bat = document.createElement('div')
    let camera = document.createElement('div')
    let weight = document.createElement('div')
    let other = document.createElement('div')
    let img = document.createElement('img')
    let procImg = document.createElement('img')
    let ram_Img = document.createElement('img')
    let bat_Img = document.createElement('img')
    let cam_Img = document.createElement('img')
    let h1 = document.createElement('h1')
    let mem_txt = document.createElement('h1')
    let weig_txt = document.createElement('h1')
    let h2 = document.createElement('h2')
    let inch = document.createElement('p')
    let inch_txt = document.createElement('p')
    let proc_txt = document.createElement('p')
    let ram_txt = document.createElement('p')
    let ram_desc = document.createElement('p')
    let mem_desc = document.createElement('p')
    let bat_desc = document.createElement('p')
    let cam_txt = document.createElement('p')
    let cam_desc = document.createElement('p')
    let weig_desc = document.createElement('p')
    let oth = document.createElement('p')
    let a = document.createElement('a')
    let more = document.createElement('a')
    let hr = document.createElement('hr')
    let hr2 = document.createElement('hr')
    //classList
    img.classList.add('img_mac')
    title.classList.add('title')
    div_buy.classList.add('btn_buy')
    a.classList.add('buy')
    display.classList.add('display')
    proc.classList.add('proc')
    ram.classList.add('ram')
    memory.classList.add('memory')
    bat.classList.add('battery')
    camera.classList.add('camera')
    weight.classList.add('weight')
    other.classList.add('touch_bar')
    more.classList.add('more')
    //innerHtml
    h1.innerHTML = i.title
    h2.innerHTML = i.price
    proc_txt.innerHTML = i.specs.chip.title
    ram_txt.innerHTML = i.specs.ram.title
    ram_desc.innerHTML = i.specs.ram.description
    inch.innerHTML = i.specs.display.size
    inch_txt.innerHTML = i.specs.display.title
    mem_txt.innerHTML = i.specs.memory.size + i.specs.memory.type
    bat_desc.innerHTML = i.specs.battery + ' ' + 'Hours'
    cam_txt.innerHTML = i.specs.camera.title
    cam_desc.innerHTML = i.specs.camera.description
    weig_txt.innerHTML = i.specs.weight
    oth.innerHTML = i.specs.other
    procImg.src = `./img/${i.specs.chip.chip_ing}`
    ram_Img.src = `./img/${i.specs.ram.memory_img}`
    img.src = `./img/${i.img}`
    bat_Img.src = `./img/battery.png`
    cam_Img.src = `./img/video.png`
    mem_desc.innerHTML = 'Memory'
    a.innerHTML = 'Buy'
    a.href = `${i.url}`
    more.innerHTML = 'Learn more'
    weig_desc.innerHTML = 'Weight'
    more.href = `#`
    //append
    other.append(oth)
    weight.append(weig_txt, weig_desc)
    camera.append(cam_Img, cam_txt)
    bat.append(bat_Img, bat_desc)
    memory.append(mem_txt, mem_desc)
    ram.append(ram_Img, ram_txt)
    proc.append(procImg, proc_txt)
    display.append(inch, inch_txt)
    div_buy.append(a)
    title.append(h1, h2)
    item.append(img, title, div_buy, hr, display, proc, ram, memory, bat, camera, weight, other, hr2, more)
    con.append(item)
}