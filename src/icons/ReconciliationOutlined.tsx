// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import ReconciliationOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReconciliationOutlined';

export interface ReconciliationOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ReconciliationOutlined: ReconciliationOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={ReconciliationOutlinedSvg} />
    ;

ReconciliationOutlined.displayName = 'ReconciliationOutlined';

export default ReconciliationOutlined;