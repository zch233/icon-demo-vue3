// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UngroupOutlinedSvg from 'icon-base/es/asn/UngroupOutlined';

export interface UngroupOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUngroupOutlined: UngroupOutlinedIconType = (props, context) => (
    <Icon name='UngroupOutlined' {...{ ...props, ...context.attrs }} icon={UngroupOutlinedSvg} />
);

IconUngroupOutlined.displayName = 'IconUngroupOutlined';
IconUngroupOutlined.theme = 'outlined';
IconUngroupOutlined.originName = 'ungroup';

export default IconUngroupOutlined;
