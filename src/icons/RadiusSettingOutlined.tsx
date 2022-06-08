// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import RadiusSettingOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusSettingOutlined';

export interface RadiusSettingOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const RadiusSettingOutlined: RadiusSettingOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={RadiusSettingOutlinedSvg} />;

RadiusSettingOutlined.displayName = 'RadiusSettingOutlined';

export default FunctionalComponent;