// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SettingFilledSvg from '@ant-design/icons-svg/lib/asn/SettingFilled';

export interface SettingFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SettingFilled: SettingFilledIconType = (props, context) => <Icon name='SettingFilled' {...{ ...props, ...context.attrs }} icon={SettingFilledSvg} />;

SettingFilled.displayName = 'SettingFilled';

export default SettingFilled;