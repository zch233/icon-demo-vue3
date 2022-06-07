// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import DingtalkSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DingtalkSquareFilled';

export interface DingtalkSquareFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DingtalkSquareFilled: DingtalkSquareFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={DingtalkSquareFilledSvg} />
    ;

DingtalkSquareFilled.displayName = 'DingtalkSquareFilled';

export default DingtalkSquareFilled;