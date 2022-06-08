// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import RestOutlinedSvg from '@ant-design/icons-svg/lib/asn/RestOutlined';

export interface RestOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const RestOutlined: RestOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={RestOutlinedSvg} />;

RestOutlined.displayName = 'RestOutlined';

export default RestOutlined;