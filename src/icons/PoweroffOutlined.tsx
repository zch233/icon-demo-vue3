// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PoweroffOutlinedSvg from '@ant-design/icons-svg/lib/asn/PoweroffOutlined';

export interface PoweroffOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PoweroffOutlined: PoweroffOutlinedIconType = (props, context) => <Icon name='PoweroffOutlined' {...{ ...props, ...context.attrs }} icon={PoweroffOutlinedSvg} />;

PoweroffOutlined.displayName = 'PoweroffOutlined';

export default PoweroffOutlined;