// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import TaobaoOutlinedSvg from '@ant-design/icons-svg/lib/asn/TaobaoOutlined';

export interface TaobaoOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const TaobaoOutlined: TaobaoOutlinedIconType = (props, context) => <Icon name='TaobaoOutlined' {...{ ...props, ...context.attrs }} icon={TaobaoOutlinedSvg} />;

TaobaoOutlined.displayName = 'TaobaoOutlined';

export default TaobaoOutlined;