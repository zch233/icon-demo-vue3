// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SettingTwoToneSvg from '@ant-design/icons-svg/lib/asn/SettingTwoTone';

export interface SettingTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SettingTwoTone: SettingTwoToneIconType = (props, context) => <Icon name='SettingTwoTone' {...{ ...props, ...context.attrs }} icon={SettingTwoToneSvg} />;

SettingTwoTone.displayName = 'SettingTwoTone';

export default SettingTwoTone;