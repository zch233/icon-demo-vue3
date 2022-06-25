// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ApiOutlinedSvg from 'icon-base/es/asn/ApiOutlined';

export interface ApiOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconApiOutlined: ApiOutlinedIconType = (props, context) => <Icon name='ApiOutlined' {...{ ...props, ...context.attrs }} icon={ApiOutlinedSvg} />;

IconApiOutlined.displayName = 'IconApiOutlined';
IconApiOutlined.theme = 'outlined';
IconApiOutlined.originName = 'api';

export default IconApiOutlined;
