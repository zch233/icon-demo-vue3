// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import SettingOutlinedSvg from '@ant-design/icons-svg/lib/asn/SettingOutlined';

export interface SettingOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SettingOutlined: SettingOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={SettingOutlinedSvg} />
    ;

SettingOutlined.displayName = 'SettingOutlined';

export default SettingOutlined;