// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DeleteColumnOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteColumnOutlined';

export interface DeleteColumnOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DeleteColumnOutlined: DeleteColumnOutlinedIconType = (props, context) => <Icon name='DeleteColumnOutlined' {...{ ...props, ...context.attrs }} icon={DeleteColumnOutlinedSvg} />;

DeleteColumnOutlined.displayName = 'DeleteColumnOutlined';

export default DeleteColumnOutlined;