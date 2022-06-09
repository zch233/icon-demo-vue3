// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import VideoCameraAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/VideoCameraAddOutlined';

export interface VideoCameraAddOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const VideoCameraAddOutlined: VideoCameraAddOutlinedIconType = (props, context) => <Icon name='VideoCameraAddOutlined' {...{ ...props, ...context.attrs }} icon={VideoCameraAddOutlinedSvg} />;

VideoCameraAddOutlined.displayName = 'VideoCameraAddOutlined';

export default VideoCameraAddOutlined;