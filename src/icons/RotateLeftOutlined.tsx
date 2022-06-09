// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import RotateLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/RotateLeftOutlined';

export interface RotateLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const RotateLeftOutlined: RotateLeftOutlinedIconType = (props, context) => <Icon name='RotateLeftOutlined' {...{ ...props, ...context.attrs }} icon={RotateLeftOutlinedSvg} />;

RotateLeftOutlined.displayName = 'RotateLeftOutlined';

export default RotateLeftOutlined;