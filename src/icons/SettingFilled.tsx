// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SettingFilledSvg from '@ant-design/icons-svg/lib/asn/SettingFilled';

export interface SettingFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SettingFilled: SettingFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SettingFilledSvg} />
    ;

SettingFilled.displayName = 'SettingFilled';

export default FunctionalComponent;