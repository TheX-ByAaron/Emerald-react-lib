import { LazyImage } from '../index';
import image from '../assets/images/image.jpg';

export default {
    title: "Components/Lazy Image",
    component: LazyImage
}

const Template = (args) => {
    return (
        <LazyImage {...args} />
    )
}

export const lazyImage = Template.bind({});
lazyImage.args = {
    src: image,
    alt: "alt text",
    emeraldStyle: "w-[100px] h-[100px] object-cover"
}