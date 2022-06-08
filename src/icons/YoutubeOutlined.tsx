// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import YoutubeOutlinedSvg from '@ant-design/icons-svg/lib/asn/YoutubeOutlined';

export interface YoutubeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const YoutubeOutlined: YoutubeOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={YoutubeOutlinedSvg} />;

YoutubeOutlined.displayName = 'YoutubeOutlined';

export default YoutubeOutlined;