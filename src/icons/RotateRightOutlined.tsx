// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import RotateRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RotateRightOutlined';

export interface RotateRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const RotateRightOutlined: RotateRightOutlinedIconType = (props, context) => <Icon name='RotateRightOutlined' {...{ ...props, ...context.attrs }} icon={RotateRightOutlinedSvg} />;

RotateRightOutlined.displayName = 'RotateRightOutlined';

export default RotateRightOutlined;