// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DollarOutlinedSvg from '@ant-design/icons-svg/lib/asn/DollarOutlined';

export interface DollarOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DollarOutlined: DollarOutlinedIconType = (props, context) => <Icon name='DollarOutlined' {...{ ...props, ...context.attrs }} icon={DollarOutlinedSvg} />;

DollarOutlined.displayName = 'DollarOutlined';

export default DollarOutlined;