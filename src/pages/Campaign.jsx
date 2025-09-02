import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ImageSlider, CampaignProgressBar } from '../AllFiles'


const Campaign = () => {
    const [campaignProgress, setcampaignProgress] = useState(13)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const data = useParams()
    const { id } = data
    console.log(id)
    let sliderImg = [
        {
            id: 1,
            src: '/image/pexels-pixabay-416405.jpg ',
        },
        {
            id: 2,
            src: '/image/marek-piwnicki-zIiKZtB_v-Y-unsplash.jpg',
        },
        {
            id: 3,
            src: '/image/pexels-aleksandar-pasaric-2041556.jpg',
        },
    ]

    return (
        <div>
            <div className='w-[95%] m-[auto] pt-[2rem]'>
                <div className="h-[fit-content] mt-[1.6rem] mb-[1rem] w-[100%] m-[auto] pb-[1rem]">
                    <ImageSlider sliderImg={sliderImg} />
                </div>
                <div className='flex items-start justify-between mb-[1.3rem] max-[427px]:block'>
                    <h2 className='font-bold text-[1.4rem] max-[427px]:mb-[1rem]'>An AI aided alternative to figma</h2>
                    {/* <div className='flex items-center max-[427px]:justify-evenly'>
                        <button className='bg-[blue] text-white rounded-[0.33rem] py-[0.25rem] px-[1.1rem] text-[1.1rem] cursor-pointer max-[639px]:px-[0.7rem] max-[639px]:py-[0.17rem] max-[427px]:w-[48%] max-[427px]:py-[0.44rem]'>Invest</button>
                        <ShareContentModal isButton={true} />
                    </div> */}
                </div>
                <div className='mb-[1rem]'>
                    <h3 className='mb-[0.5rem] font-bold ' >Campaign detail</h3>
                    <p>long long text lorem45 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eum tenetur necessitatibus at ut mollitia voluptatum minima excepturi iste obcaecati cum corporis doloremque quia, maiores id quod illo nemo enim assumenda ipsam iure? Aut, ex voluptate fugiat ullam deserunt eum veniam commodi obcaecati.</p>
                </div>
                <div className='mb-[1rem]'>
                    <h3 className='mb-[0.5rem] font-bold ' >Campaign goal</h3>
                    <p>To raise funding for An AI aided creative software</p>
                </div>
                <div className='mb-[1rem]'>
                    <h3 className='mb-[1rem] font-bold ' >Campaign progress</h3>
                    <CampaignProgressBar campaignProgress={campaignProgress} />
                </div>

                <div className='mb-[1rem]'>
                    <h3 className='mb-[0.5rem] font-bold ' >Campaign Amount goal</h3>
                    <p>&#8358;50,000,000 </p>
                </div>
                <div className='mb-[1rem]'>
                    <h3 className='mb-[0.5rem] font-bold ' >Amount raised</h3>
                    <p>&#8358;5,230,000 / &#8358;50,000,000</p>
                </div>
                <div className='mb-[1rem]'>
                    <h3 className='mb-[0.5rem] font-bold ' >Contributors Count</h3>
                    <p>47</p>
                </div>
                <div className='mb-[1rem]'>
                    <h3 className='mb-[0.5rem] font-bold ' >Campaign Status</h3>
                    <p>Active</p>
                </div>
                <div className='mb-[1rem]'>
                    <h3 className='mb-[0.5rem] font-bold ' >Campaign fundraising period</h3>
                    <div className='flex items-center'>
                        <div>20/08/2025 -</div>
                        <div>12/02/2026</div>
                    </div>
                </div>
                <div className='mb-[1rem]'>
                    <h3 className='mb-[0.5rem] font-bold ' >Campaign category</h3>
                    <p>Software</p>
                </div>

            </div>
        </div>
    )
}

export default Campaign