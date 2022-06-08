// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CheckSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CheckSquareFilled';

export interface CheckSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CheckSquareFilled: CheckSquareFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CheckSquareFilledSvg} />;

CheckSquareFilled.displayName = 'CheckSquareFilled';

export default CheckSquareFilled;