// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import IeSquareFilledSvg from '@ant-design/icons-svg/lib/asn/IeSquareFilled';

export interface IeSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IeSquareFilled: IeSquareFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={IeSquareFilledSvg} />;

IeSquareFilled.displayName = 'IeSquareFilled';

export default IeSquareFilled;