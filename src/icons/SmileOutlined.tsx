// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SmileOutlinedSvg from '@ant-design/icons-svg/lib/asn/SmileOutlined';

export interface SmileOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SmileOutlined: SmileOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={SmileOutlinedSvg} />;

SmileOutlined.displayName = 'SmileOutlined';

export default SmileOutlined;