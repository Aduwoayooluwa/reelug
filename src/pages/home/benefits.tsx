import { BenefitImg } from "../../assets";
import { PullRequestOutlined, ClusterOutlined, CalendarOutlined, OneToOneOutlined } from "@ant-design/icons";
import { PrimaryButton } from "../../components/button.components";

export default function Benefits() {
    const allBenefits = [
        {
            title: 'Organized Job Application Tracking',
            content: 'Keep all job applications in one place',
            Icon: ClusterOutlined
        },
        {
            title: 'Mobile Accessibility',
            content: 'Access and update your job application status on the go with a mobile-friendly interface',
            Icon: PullRequestOutlined
        },
        {
            title: 'Integrated Calendar View',
            content: 'View all application-related activities in a calendar format',
            Icon: CalendarOutlined 
        }
    ]
    return (
        <div className="px-28 py-20 space-y-14">
            <div className="w-full flex flex-col space-y-8 items-center justify-center">
        <h1 className=" w-full md:w-[70%] 2xl:w-[60%] text-2xl md:text3xl leading-normal md:leading-tight lg:text-[64px] text-center font-[600]">
          Key Benefits for you
        </h1>

        <div className="w-full gap-8 md:w-[80%] grid place-items-center">
        <p className="text-center text-dark text-[20px]">
        We understand that effectively managing job applications is the cornerstone of a successful job search. With that in mind, we&apos;re passionate about simplifying your application process and helping you stay organized, so you can focus on landing your dream job.
        </p>
        <PrimaryButton icon={<OneToOneOutlined />}>
            Get Started 
        </PrimaryButton>
        </div>
      </div>
            <div className="flex items-center w-full justify-between">
                <div className="w-[50%] rounded-md overflow-hidden">
                    <img src={BenefitImg} alt='benefits' />
                </div>

                <div className="w-[40%] space-y-5">
                    {
                        allBenefits.map((benefit, index) => (
                            <Benefit key={index} {...benefit} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


function Benefit({ Icon, title, content }: {
    Icon: React.FC,
    title: string,
    content: string
}) {
    return (
        <div className="flex items-center w-full p-3 rounded-md border border-gray-300 space-x-6 h-[100px]">
            <Icon />
            <div className="w-[80%]">
                <h2 className="font-[600] text-xl space-y-3">{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    )
}