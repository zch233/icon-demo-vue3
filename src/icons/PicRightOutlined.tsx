// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PicRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/PicRightOutlined';

export interface PicRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PicRightOutlined: PicRightOutlinedIconType = (props, context) => <Icon name='PicRightOutlined' {...{ ...props, ...context.attrs }} icon={PicRightOutlinedSvg} />;

PicRightOutlined.displayName = 'PicRightOutlined';

export default PicRightOutlined;