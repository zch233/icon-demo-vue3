// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import AlipaySquareFilledSvg from '@ant-design/icons-svg/lib/asn/AlipaySquareFilled';

export interface AlipaySquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const AlipaySquareFilled: AlipaySquareFilledIconType = (props, context) => <Icon name='AlipaySquareFilled' {...{ ...props, ...context.attrs }} icon={AlipaySquareFilledSvg} />;

AlipaySquareFilled.displayName = 'AlipaySquareFilled';

export default AlipaySquareFilled;