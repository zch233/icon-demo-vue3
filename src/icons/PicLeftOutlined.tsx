// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PicLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/PicLeftOutlined';

export interface PicLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PicLeftOutlined: PicLeftOutlinedIconType = (props, context) => <Icon name='PicLeftOutlined' {...{ ...props, ...context.attrs }} icon={PicLeftOutlinedSvg} />;

PicLeftOutlined.displayName = 'PicLeftOutlined';

export default PicLeftOutlined;