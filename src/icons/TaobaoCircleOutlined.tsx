// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import TaobaoCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/TaobaoCircleOutlined';

export interface TaobaoCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const TaobaoCircleOutlined: TaobaoCircleOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={TaobaoCircleOutlinedSvg} />;

TaobaoCircleOutlined.displayName = 'TaobaoCircleOutlined';

export default FunctionalComponent;