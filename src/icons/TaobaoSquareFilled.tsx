// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import TaobaoSquareFilledSvg from '@ant-design/icons-svg/lib/asn/TaobaoSquareFilled';

export interface TaobaoSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const TaobaoSquareFilled: TaobaoSquareFilledIconType = (props, context) => <Icon name='TaobaoSquareFilled' {...{ ...props, ...context.attrs }} icon={TaobaoSquareFilledSvg} />;

TaobaoSquareFilled.displayName = 'TaobaoSquareFilled';

export default TaobaoSquareFilled;