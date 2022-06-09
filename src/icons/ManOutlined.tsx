// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ManOutlinedSvg from '@ant-design/icons-svg/lib/asn/ManOutlined';

export interface ManOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ManOutlined: ManOutlinedIconType = (props, context) => <Icon name='ManOutlined' {...{ ...props, ...context.attrs }} icon={ManOutlinedSvg} />;

ManOutlined.displayName = 'ManOutlined';

export default ManOutlined;