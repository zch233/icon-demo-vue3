// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import WarningTwoToneSvg from '@ant-design/icons-svg/lib/asn/WarningTwoTone';

export interface WarningTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const WarningTwoTone: WarningTwoToneIconType = (props, context) => <Icon name='WarningTwoTone' {...{ ...props, ...context.attrs }} icon={WarningTwoToneSvg} />;

WarningTwoTone.displayName = 'WarningTwoTone';

export default WarningTwoTone;