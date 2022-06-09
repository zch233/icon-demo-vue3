// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import QqSquareFilledSvg from '@ant-design/icons-svg/lib/asn/QqSquareFilled';

export interface QqSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const QqSquareFilled: QqSquareFilledIconType = (props, context) => <Icon name='QqSquareFilled' {...{ ...props, ...context.attrs }} icon={QqSquareFilledSvg} />;

QqSquareFilled.displayName = 'QqSquareFilled';

export default QqSquareFilled;