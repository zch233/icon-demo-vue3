// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DollarTwoToneSvg from '@ant-design/icons-svg/lib/asn/DollarTwoTone';

export interface DollarTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DollarTwoTone: DollarTwoToneIconType = (props, context) => <Icon name='DollarTwoTone' {...{ ...props, ...context.attrs }} icon={DollarTwoToneSvg} />;

DollarTwoTone.displayName = 'DollarTwoTone';

export default DollarTwoTone;